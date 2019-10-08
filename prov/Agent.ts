
import { Graph, Facade } from "rdfoo";
import { Types, Predicates } from "bioterms";

export default class Agent extends Facade {

    constructor(graph:Graph, uri:string) {

        super(graph, uri)

    }

    get facadeType():string {
        return Types.Prov.Agent
    }

}
