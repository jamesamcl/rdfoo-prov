
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

}


