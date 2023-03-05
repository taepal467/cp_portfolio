export default function Footer() {
    let year =  new Date().getFullYear();
    return(
        <div className="flex pt-36">
            <p className="text-neutral-600 text-base font-poiret">Created and developed By Chantae Palacio &copy; {year}</p>
        </div>
    );
}