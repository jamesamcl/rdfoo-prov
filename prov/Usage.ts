
import { Types, Predicates } from "bioterms";
import ProvView from './ProvView'
import ProvFacade from './ProvFacade'
import { Facade, Node } from 'rdfoo'

export default class Usage extends ProvFacade {

    constructor(view:ProvView, uri:Node) {

        super(view, uri)

    }

    get facadeType():string {
        return Types.Prov.Usage
    }

    get entity():Facade|undefined {
        let entity = this.getProperty(Predicates.Prov.entity)
        if(entity === undefined)
            return undefined
        return this.view.subjectToFacade(entity)

    }

    set entity(entity:Facade|undefined){

        if(entity === undefined){
            this.deleteProperty(Predicates.Prov.entity)
        } else{
            this.setProperty(Predicates.Prov.entity, entity.subject)
        }

    }

    get role():string|undefined {

        return this.getUriProperty(Predicates.Prov.hadRole)
    }

    set role(role:string|undefined) {
        this.setUriProperty(Predicates.Prov.hadRole, role)
    }

}
