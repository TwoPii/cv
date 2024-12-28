export default function EducationCard ({degree, university, period}){
    return (<div>
        <span>{degree}</span>
        <span>{university}</span>
        <span>{period}</span>
    </div>);
}