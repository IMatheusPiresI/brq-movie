import { IBeneficiaryState } from '@src/screens/App/Attendance/Beneficiary/BeneficiaryManagement/types';
import { ISimulations } from '@src/services/loan/types';
import {
  IBeneficiariesShare,
  IBeneficiaryCreate,
} from '@src/store/beneficiary/types';
import { IBeneficiaryReRegistration } from '@src/store/reRegistration/types';
import { IAttInfoCadastralMaintenance } from '@src/store/user/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Authentication: undefined;
      AppRoutes: undefined;
      Home: undefined;
      SignIn: undefined;
    }
  }
}
