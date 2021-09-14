
import { GraphView, Node } from "rdfoo";
import { Types, Predicates } from "bioterms";
import ProvView from './ProvView'
import ProvFacade from './ProvFacade'

export default class Agent extends ProvFacade {

    constructor(view:ProvView, uri:Node) {

        super(view, uri)

    }

    get facadeType():string {
        return Types.Prov.Agent
    }

}
