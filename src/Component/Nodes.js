import Component from "../Common/Component.js";
import { breadCrumb } from "./Breadcrumb.js";
import Node from "./Node.js";

export default class Nodes extends Component {
    constructor(...args){
        super(...args);
    }

    template(){
        return this.$state.map(item => new Node('',item).template()).join('');
    }

    setEvent(){
        this.$target.addEventListener('click',({target}) => {
            const targetName = target.closest('.Node')?.dataset?.name;
            const targetId = target.closest('.Node')?.dataset?.id;
            if(!targetId) return;
            const newState = [...breadCrumb.$state,{
                title : targetName
            }];
            breadCrumb.setState(newState);
            console.log(targetId);
        })
    }
}