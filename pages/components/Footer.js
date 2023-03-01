export default function Footer() {
    let year =  new Date().getFullYear();
    return(
        <div className="flex pt-36">
            <p className="text-gray-600 text-xl">Created and developed By Chantae Palacio &copy; {year}</p>
        </div>
    );
}