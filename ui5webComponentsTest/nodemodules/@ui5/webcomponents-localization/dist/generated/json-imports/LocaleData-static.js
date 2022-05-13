import { registerLocaleDataLoader } from "@ui5/webcomponents-base/dist/asset-registries/LocaleData.js";

import ar from "../assets/cldr/ar.json";
import ar_EG from "../assets/cldr/ar_EG.json";
import ar_SA from "../assets/cldr/ar_SA.json";
import bg from "../assets/cldr/bg.json";
import ca from "../assets/cldr/ca.json";
import cs from "../assets/cldr/cs.json";
import da from "../assets/cldr/da.json";
import de from "../assets/cldr/de.json";
import de_AT from "../assets/cldr/de_AT.json";
import de_CH from "../assets/cldr/de_CH.json";
import el from "../assets/cldr/el.json";
import el_CY from "../assets/cldr/el_CY.json";
import en from "../assets/cldr/en.json";
import en_AU from "../assets/cldr/en_AU.json";
import en_GB from "../assets/cldr/en_GB.json";
import en_HK from "../assets/cldr/en_HK.json";
import en_IE from "../assets/cldr/en_IE.json";
import en_IN from "../assets/cldr/en_IN.json";
import en_NZ from "../assets/cldr/en_NZ.json";
import en_PG from "../assets/cldr/en_PG.json";
import en_SG from "../assets/cldr/en_SG.json";
import en_ZA from "../assets/cldr/en_ZA.json";
import es from "../assets/cldr/es.json";
import es_AR from "../assets/cldr/es_AR.json";
import es_BO from "../assets/cldr/es_BO.json";
import es_CL from "../assets/cldr/es_CL.json";
import es_CO from "../assets/cldr/es_CO.json";
import es_MX from "../assets/cldr/es_MX.json";
import es_PE from "../assets/cldr/es_PE.json";
import es_UY from "../assets/cldr/es_UY.json";
import es_VE from "../assets/cldr/es_VE.json";
import et from "../assets/cldr/et.json";
import fa from "../assets/cldr/fa.json";
import fi from "../assets/cldr/fi.json";
import fr from "../assets/cldr/fr.json";
import fr_BE from "../assets/cldr/fr_BE.json";
import fr_CA from "../assets/cldr/fr_CA.json";
import fr_CH from "../assets/cldr/fr_CH.json";
import fr_LU from "../assets/cldr/fr_LU.json";
import he from "../assets/cldr/he.json";
import hi from "../assets/cldr/hi.json";
import hr from "../assets/cldr/hr.json";
import hu from "../assets/cldr/hu.json";
import id from "../assets/cldr/id.json";
import it from "../assets/cldr/it.json";
import it_CH from "../assets/cldr/it_CH.json";
import ja from "../assets/cldr/ja.json";
import kk from "../assets/cldr/kk.json";
import ko from "../assets/cldr/ko.json";
import lt from "../assets/cldr/lt.json";
import lv from "../assets/cldr/lv.json";
import ms from "../assets/cldr/ms.json";
import nb from "../assets/cldr/nb.json";
import nl from "../assets/cldr/nl.json";
import nl_BE from "../assets/cldr/nl_BE.json";
import pl from "../assets/cldr/pl.json";
import pt from "../assets/cldr/pt.json";
import pt_PT from "../assets/cldr/pt_PT.json";
import ro from "../assets/cldr/ro.json";
import ru from "../assets/cldr/ru.json";
import ru_UA from "../assets/cldr/ru_UA.json";
import sk from "../assets/cldr/sk.json";
import sl from "../assets/cldr/sl.json";
import sr from "../assets/cldr/sr.json";
import sr_Latn from "../assets/cldr/sr_Latn.json";
import sv from "../assets/cldr/sv.json";
import th from "../assets/cldr/th.json";
import tr from "../assets/cldr/tr.json";
import uk from "../assets/cldr/uk.json";
import vi from "../assets/cldr/vi.json";
import zh_CN from "../assets/cldr/zh_CN.json";
import zh_HK from "../assets/cldr/zh_HK.json";
import zh_SG from "../assets/cldr/zh_SG.json";
import zh_TW from "../assets/cldr/zh_TW.json";

const cldrData = {
	ar,ar_EG,ar_SA,bg,ca,cs,da,de,de_AT,de_CH,el,el_CY,en,en_AU,en_GB,en_HK,en_IE,en_IN,en_NZ,en_PG,en_SG,en_ZA,es,es_AR,es_BO,es_CL,es_CO,es_MX,es_PE,es_UY,es_VE,et,fa,fi,fr,fr_BE,fr_CA,fr_CH,fr_LU,he,hi,hr,hu,id,it,it_CH,ja,kk,ko,lt,lv,ms,nb,nl,nl_BE,pl,pt,pt_PT,ro,ru,ru_UA,sk,sl,sr,sr_Latn,sv,th,tr,uk,vi,zh_CN,zh_HK,zh_SG,zh_TW
};

const fetchCldrJson = async (localeId) => {
	if (typeof cldrData[localeId] === "object") {
		// inlined from build
		throw new Error("[LocaleData] Inlined JSON not supported with static imports of assets. Use dynamic imports of assets or configure JSON imports as URLs")
	}
	return (await fetch(cldrData[localeId])).json();
}

Object.keys(cldrData).forEach(localeId => registerLocaleDataLoader(localeId, fetchCldrJson));
