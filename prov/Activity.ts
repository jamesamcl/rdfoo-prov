
import Association from "./Association";
import { Types, Predicates } from "bioterms";
import Plan from "./Plan";
import Usage from "./Usage";
import { node, Facade, Graph } from 'rdfoo'

export default class Activity extends Facade {

    constructor(graph:Graph, uri:string) {

        super(graph, uri)

    }

    get facadeType():string {
        return Types.Prov.Activity
    }

    get associations():Array<Association> {

        return this.getUriProperties(Predicates.Prov.qualifiedAssociation)
                    .map((uri) => new Association(this._graph, uri))

    }

    get plan():Plan|undefined {

        let plan = this.getUriProperty(Predicates.Prov.hadPlan)

        if(!plan) {
            return undefined
        }

        return new Plan(this._graph, plan)
    }

    set plan(plan:Plan|undefined) {

        if(plan === undefined) {
            this.deleteProperty(Predicates.Prov.hadPlan)
        } else {
            this.setUriProperty(Predicates.Prov.hadPlan, plan.uri)
        }
    }

    get usage():Usage|undefined {

        let usage = this.getUriProperty(Predicates.Prov.qualifiedUsage)

        if(!usage) {
            return undefined
        }

        return new Usage(this._graph, usage)
    }

    set usage(usage:Usage|undefined) {

        if(usage === undefined) {
            this.deleteProperty(Predicates.Prov.qualifiedUsage)
        } else {
            this.setUriProperty(Predicates.Prov.qualifiedUsage, usage.uri)
        }
    }

    get association():Association|undefined {

        let association = this.getUriProperty(Predicates.Prov.qualifiedAssociation)

        if(!association) {
            return undefined
        }

        return new Association(this._graph, association)
    }

    set association(association:Association|undefined) {

        if(association === undefined) {
            this.deleteProperty(Predicates.Prov.qualifiedAssociation)
        } else {
            this.setUriProperty(Predicates.Prov.qualifiedAssociation, association.uri)
        }
    }

}
