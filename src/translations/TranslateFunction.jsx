import en from "./en.json";
import es from "./es.json";
import cn from "./cn.json";
import pt from "./pt.json";
import de from "./de.json";
import fr from "./fr.json";
import no from "./no.json";
import nl from "./nl.json";

let langs = {en, es,cn, pt, de, fr, no, nl}


export default function translateFunc(value, string){
  return langs[value][string]
  }