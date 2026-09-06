const KEY='rethink_calisthenics_v2',OLD_KEY='rethink_calisthenics_v1';
const defaults={view:'training',completed:{},ratings:{},adapt:{},setChecks:{}};
export function loadState(){try{const raw=localStorage.getItem(KEY)||localStorage.getItem(OLD_KEY)||'{}',x=JSON.parse(raw);const view=x.view==='plan'?'plan':'training';return {...defaults,...x,view,completed:{...(x.completed||{})},ratings:{...(x.ratings||{})},adapt:{...(x.adapt||{})},setChecks:{...(x.setChecks||{})}}}catch{return {...defaults}}}
export function saveState(state){localStorage.setItem(KEY,JSON.stringify(state))}
export function workoutKey(week,index){return `w${week}d${index}`}
