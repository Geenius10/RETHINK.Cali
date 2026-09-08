const KEY='rethink_calisthenics_xmas_v1',OLD_KEYS=['rethink_calisthenics_v2','rethink_calisthenics_v1'];
const defaults={view:'training',completed:{},optionalCompleted:{},ratings:{},adapt:{},setChecks:{}};
export function loadState(){try{let raw=localStorage.getItem(KEY);if(!raw)for(const k of OLD_KEYS){raw=localStorage.getItem(k);if(raw)break}const x=JSON.parse(raw||'{}');const view=x.view==='plan'?'plan':'training';return {...defaults,...x,view,completed:{...(x.completed||{})},optionalCompleted:{...(x.optionalCompleted||{})},ratings:{...(x.ratings||{})},adapt:{...(x.adapt||{})},setChecks:{...(x.setChecks||{})}}}catch{return {...defaults}}}
export function saveState(state){localStorage.setItem(KEY,JSON.stringify(state))}
export function workoutKey(week,index){return `w${week}d${index}`}
export function introKey(index){return `intro${index}`}
export function optionalKey(week){return `opt${week}`}
