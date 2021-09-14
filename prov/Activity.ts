
import Association from "./Association";
import { Types, Predicates } from "bioterms";
import Plan from "./Plan";
import Usage from "./Usage";
import { node, Node } from 'rdfoo'
import ProvView from './ProvView'
import ProvFacade from './ProvFacade'

export default class Activity extends ProvFacade {

    constructor(view:ProvView, uri:Node) {

        super(view, uri)

    }

    get facadeType():string {
        return Types.Prov.Activity
    }

    get associations():Array<Association> {

        return this.getProperties(Predicates.Prov.qualifiedAssociation)
                    .map((uri) => new Association(this.view, uri))

    }

    get plan():Plan|undefined {

        let plan = this.getProperty(Predicates.Prov.hadPlan)

        if(!plan) {
            return undefined
        }

        return new Plan(this.view, plan)
    }

    set plan(plan:Plan|undefined) {

        if(plan === undefined) {
            this.deleteProperty(Predicates.Prov.hadPlan)
        } else {
            this.setProperty(Predicates.Prov.hadPlan, plan.subject)
        }
    }

    get usage():Usage|undefined {

        let usage = this.getProperty(Predicates.Prov.qualifiedUsage)

        if(!usage) {
            return undefined
        }

        return new Usage(this.view, usage)
    }

    set usage(usage:Usage|undefined) {

        if(usage === undefined) {
            this.deleteProperty(Predicates.Prov.qualifiedUsage)
        } else {
            this.setProperty(Predicates.Prov.qualifiedUsage, usage.subject)
        }
    }

    get association():Association|undefined {

        let association = this.getProperty(Predicates.Prov.qualifiedAssociation)

        if(!association) {
            return undefined
        }

        return new Association(this.view, association)
    }

    set association(association:Association|undefined) {

        if(association === undefined) {
            this.deleteProperty(Predicates.Prov.qualifiedAssociation)
        } else {
            this.setProperty(Predicates.Prov.qualifiedAssociation, association.subject)
        }
    }

}
