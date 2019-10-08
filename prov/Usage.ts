
import { Graph, Facade } from "rdfoo";
import { Types, Predicates } from "bioterms";

export default class Usage extends Facade {

    constructor(graph:Graph, uri:string) {

        super(graph, uri)

    }

    get facadeType():string {
        return Types.Prov.Usage
    }

    get entity():Facade|undefined{
        let entity = this.getUriProperty(Predicates.Prov.entity)
        if(entity === undefined)
            return undefined
        return this._graph.uriToFacade(entity)

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
