const KEY='rethink_calisthenics_v1';
const defaults={view:'home',week:1,completed:{},history:[],milestones:{},exerciseFilter:'Alle',query:''};
export function loadState(){try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return {...defaults}}}
export function saveState(state){localStorage.setItem(KEY,JSON.stringify(state))}
export function workoutKey(week,index){return `w${week}d${index}`}
