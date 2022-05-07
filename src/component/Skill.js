export default function Skill({name,percent}) {
    return (<div className="flex justify-center items-center w-full bg-white bg-opacity-20 py-2 mb-1 px-2 rounded-md">
        <p className="font-bold">{name}</p>
        <div className="w-full ml-2 h-2 bg-orange-50 bg-opacity-50 rounded-full">
            <div className="w-3/4 h-full bg-orange-900 rounded-full"></div>
        </div>
    </div>)
}