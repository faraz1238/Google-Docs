import { atom } from "recoil"


export const atomInputRef = atom({
    key: 'atomInputRef',
    default:null
})

export const atomFileName = atom({
    key: 'atomFileName',
    default:'Untitled Document'
})
export const showRuler=atom({
    key:'showRuler',
    default:true
})