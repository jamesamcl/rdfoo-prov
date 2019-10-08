
import { Facade, Graph } from 'rdfoo'
import { Types } from "bioterms";

export default class Plan extends Facade {

    constructor(graph:Graph, uri:string) {

        super(graph, uri)

    }

    get facadeType():string {
        return Types.Prov.Plan
    }
}
