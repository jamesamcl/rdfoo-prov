
import { GraphViewBasic, Facade } from 'rdfoo'
import { Types } from 'bioterms'
import Activity from './Activity'
import Usage from './Usage'
import Agent from './Agent'
import Plan from './Plan'
import Association from './Association'

export default class ProvView extends GraphViewBasic {

    uriToFacade(uri: string):Facade|undefined {

        let types = this.getTypes(uri)

        for (let type of types) {
            if (type === Types.Prov.Activity) {
                return new Activity(this, uri)
            }
            if (type === Types.Prov.Agent) {
                return new Agent(this, uri)
            }
            if (type === Types.Prov.Association) {
                return new Association(this, uri)
            }
            if (type === Types.Prov.Plan) {
                return new Plan(this, uri)
            }
            if (type === Types.Prov.Usage) {
                return new Usage(this, uri)
            }
        }

    }

    get activities():Activity[] {
        return this.instancesOfType(Types.Prov.Activity).map(uri => new Activity(this, uri))
    }

    get agents():Agent[] {
        return this.instancesOfType(Types.Prov.Agent).map(uri => new Agent(this, uri))
    }

    get associations():Association[] {
        return this.instancesOfType(Types.Prov.Association).map(uri => new Association(this, uri))
    }

    get plans():Plan[] {
        return this.instancesOfType(Types.Prov.Plan).map(uri => new Plan(this, uri))
    }

    get usages():Usage[] {
        return this.instancesOfType(Types.Prov.Usage).map(uri => new Usage(this, uri))
    }

}


