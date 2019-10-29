
import { Facade, Graph } from 'rdfoo'
import ProvView from './ProvView';

export default abstract class ProvFacade extends Facade {

    view:ProvView

    constructor(view:ProvView, uri:string) {
        super(view.graph, uri)
        this.view = view
    }
}

