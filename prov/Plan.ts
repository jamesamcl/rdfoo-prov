
import { Facade } from 'rdfoo'
import { Types } from "bioterms";
import ProvView from './ProvView'
import ProvFacade from './ProvFacade'

export default class Plan extends ProvFacade {

    constructor(view:ProvView, uri:string) {

        super(view, uri)

    }

    get facadeType():string {
        return Types.Prov.Plan
    }
}
