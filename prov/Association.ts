

import { Graph, Facade } from 'rdfoo'
import Agent from "./Agent";
import Plan from "./Plan";
import { Types, Predicates } from "bioterms";

export default class Association extends Facade {

    constructor(graph:Graph, uri:string) {

        super(graph, uri)

    }

    get facadeType():string {
        return Types.Prov.Association
    }

    get agent():Agent|undefined {

        let agent = this.getUriProperty(Predicates.Prov.agent)

        if(!agent) {
            return undefined
        }

        return new Agent(this._graph, agent)
    }

    set agent(agent:Agent|undefined) {

        if(agent === undefined) {
            this.deleteProperty(Predicates.Prov.agent)
        } else {
            this.setUriProperty(Predicates.Prov.agent, agent.uri)
        }
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

    get role():string|undefined {

        return this.getUriProperty(Predicates.Prov.hadRole)
    }

    set role(role:string|undefined) {
        this.setUriProperty(Predicates.Prov.hadRole, role)
    }


}
