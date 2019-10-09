
import { Domain, Facade, Graph } from 'rdfoo'
import { Types } from 'bioterms'
import Activity from './Activity'
import Usage from './Usage'
import Agent from './Agent'
import Plan from './Plan'
import Association from './Association'

export default class Prov extends Domain {

    uriToFacade(graph:Graph, uri: string):Facade|undefined {

        switch(uri) {
        case Types.Prov.Activity:
            return new Activity(graph, uri)
        case Types.Prov.Agent:
            return new Agent(graph, uri)
        case Types.Prov.Association:
            return new Association(graph, uri)
        case Types.Prov.Plan:
            return new Plan(graph, uri)
        case Types.Prov.Usage:
            return new Usage(graph, uri)
        }

    }

}


