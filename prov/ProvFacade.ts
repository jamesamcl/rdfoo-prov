
import { Facade, Node } from 'rdfoo'
import ProvView from './ProvView';

export default abstract class ProvFacade extends Facade {

    view:ProvView

    constructor(view:ProvView, subject:Node) {
        super(view.graph, subject)
        this.view = view
    }
}

