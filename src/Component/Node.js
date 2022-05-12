import Component from "../Common/Component.js";

export default class Node extends Component{
    constructor(...args){
        super(...args)
    }

    template(){
        console.log(this.$state);
        const { id , type, name, filePath } = this.$state;
        return `
            <div class="Node" key=${id} data-id=${id} data-name=${name}>
                <img src=${transImgSrc(type,filePath)}>
                <div>${name}</div>
            </div>
        `
    }

    render(){
        // this.$target.innerHTML += this.template();
    }
}

const transImgSrc = (type,filePath) => {
    switch(type){
        case 'DIRECTORY':
            return './assets/directory.png';
        default :
            return filePath
    }
}