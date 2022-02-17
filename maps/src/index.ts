import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMap";

const company = new Company();
const user = new User();
const customMap = new CustomMap("map");

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
