import Component from "../Common/Component.js";
import { $ } from "../Common/util.js";

class Breadcrumb extends Component{
    constructor(...args){
        super(...args)
    }

    unmount(){
        this.$state = [{
            title : 'root'
        }]
    }

    template(){
        return `
           ${this.$state.map(({title}) => `<div>${title}</div>`).join('')}
        `;
    }
}

const crumbContainer = $('.Breadcrumb');
export const breadCrumb = new Breadcrumb(crumbContainer);