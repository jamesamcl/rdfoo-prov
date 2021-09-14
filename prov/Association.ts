

import { GraphView, Node } from 'rdfoo'
import Agent from "./Agent";
import Plan from "./Plan";
import { Types, Predicates } from "bioterms";
import ProvView from './ProvView'
import ProvFacade from './ProvFacade'

export default class Association extends ProvFacade {

    constructor(view:ProvView, uri:Node) {

        super(view, uri)

    }

    get facadeType():string {
        return Types.Prov.Association
    }

    get agent():Agent|undefined {

        let agent = this.getProperty(Predicates.Prov.agent)

        if(!agent) {
            return undefined
        }

        return new Agent(this.view, agent)
    }

    set agent(agent:Agent|undefined) {

        if(agent === undefined) {
            this.deleteProperty(Predicates.Prov.agent)
        } else {
            this.setProperty(Predicates.Prov.agent, agent.subject)
        }
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

    get role():string|undefined {

        return this.getUriProperty(Predicates.Prov.hadRole)
    }

    set role(role:string|undefined) {
        this.setUriProperty(Predicates.Prov.hadRole, role)
    }


}
