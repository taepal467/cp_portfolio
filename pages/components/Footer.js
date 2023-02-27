export default function Footer() {
    let year =  new Date().getFullYear();
    return(
        <div>
            <p className="text-white">Created and developed By Chantae Palacio &copy; {year}</p>
        </div>
    );
}