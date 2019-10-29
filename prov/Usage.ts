
import { Types, Predicates } from "bioterms";
import ProvView from './ProvView'
import ProvFacade from './ProvFacade'
import { Facade } from 'rdfoo'

export default class Usage extends ProvFacade {

    constructor(view:ProvView, uri:string) {

        super(view, uri)

    }

    get facadeType():string {
        return Types.Prov.Usage
    }

    get entity():Facade|undefined {
        let entity = this.getUriProperty(Predicates.Prov.entity)
        if(entity === undefined)
            return undefined
        return this.view.uriToFacade(entity)

    }

    set entity(entity:Facade|undefined){

        if(entity === undefined){
            this.deleteProperty(Predicates.Prov.entity)
        } else{
            this.setUriProperty(Predicates.Prov.entity, entity.uri)
        }

    }

    get role():string|undefined {

        return this.getUriProperty(Predicates.Prov.hadRole)
    }

    set role(role:string|undefined) {
        this.setUriProperty(Predicates.Prov.hadRole, role)
    }

}
