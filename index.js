import Banner from './src/components/Banner/Banner'
import Button from './src/components/Button/Button'
import ButtonSmall from './src/components/Button/ButtonSmall'
import Table from './src/components/Table/Table'
import TableRow from './src/components/TableRow/TableRow'
import TableRowBase from './src/components/TableRow/TableRowBase'
import TableRowOrder from './src/components/TableRow/TableRowOrder'
import TableRowOrderItem from './src/components/TableRow/TableRowOrderItem'
import TableRowArrow from './src/components/TableRow/TableRowArrow'
import TableRowStore from './src/components/TableRow/TableRowStore'
import TableRowOperation from './src/components/TableRow/TableRowOperation'
import TableRowGroup from './src/components/TableRow/TableRowGroup'
import TextField from './src/components/TextField/TextField'
import TextFieldAddress from './src/components/TextFieldAddress/TextFieldAddress'
import TextVibrate from './src/components/Text/TextVibrate'
import TextSecondary from './src/components/Text/TextSecondary'
import TextBase from './src/components/Text/TextBase'
import TextBaseCenter from './src/components/Text/TextBaseCenter'
import TextH1 from './src/components/Text/TextH1'
import TextH1Center from './src/components/Text/TextH1Center'
import TextH2 from './src/components/Text/TextH2'
import TextH2Center from './src/components/Text/TextH2Center'
import TextH3 from './src/components/Text/TextH3'
import RemoteImage from './src/components/RemoteImage/RemoteImage'
import StoreLogo from './src/components/StoreLogo/StoreLogo'
// import SegmentedTab from './src/components/SegmentedTab/SegmentedTab'
import Seporator from './src/components/Seporator/Seporator'
import BottomButtonView from './src/components/BottomButtonView/BottomButtonView'
import TopImageView from './src/components/TopImageView/TopImageView'
import SpinnerView from './src/components/SpinnerView/SpinnerView'
import ModalBase from './src/components/Modal/ModalBase'
import ModalActions from './src/components/Modal/ModalActions'
import ModalActionsBase from './src/components/Modal/ModalActionsBase'
import ModalActivity from './src/components/Modal/ModalActivity'
import ModalActivityBase from './src/components/Modal/ModalActivityBase'
import ModalConfirm from './src/components/Modal/ModalConfirm'
import ModalConfirmBase from './src/components/Modal/ModalConfirmBase'
import ModalAlert from './src/components/Modal/ModalAlert'
import ModalAlertBase from './src/components/Modal/ModalAlertBase'
import ModalTextField from './src/components/Modal/ModalTextField'
import ModalTextFieldBase from './src/components/Modal/ModalTextFieldBase'
import Popup from './src/components/Popup/Popup'
import List from './src/components/List/List'
import ListItem from './src/components/List/ListItem'
import ListItemOrdered from './src/components/List/ListItemOrdered'
import Progress from './src/components/Progress/Progress'
import Search from './src/components/Search/Search'
import Link from './src/components/Link/Link'

import Alert from './src/hoc/Alert/Alert'
import { AlertProvider } from './src/hoc/Alert/AlertProvider'

import * as utils from './src/common/utils'
import * as typography from './src/common/typography'
import * as vars from './src/common/vars'
import extend from 'lodash/extend'

module.exports = extend({
  Banner,
  Button,
  ButtonSmall,
  BottomButtonView,
  Table,
  TableRow,
  TableRowBase,
  TableRowOrder,
  TableRowOrderItem,
  TableRowArrow,
  TableRowStore,
  TableRowOperation,
  TableRowGroup,
  TopImageView,
  TextField,
  TextFieldAddress,
  TextVibrate,
  TextSecondary,
  TextBase,
  TextBaseCenter,
  TextH1,
  TextH1Center,
  TextH2,
  TextH2Center,
  TextH3,
  RemoteImage,
  StoreLogo,
  // SegmentedTab,
  SpinnerView,
  Seporator,
  ModalBase,
  ModalActions,
  ModalActionsBase,
  ModalActivity,
  ModalActivityBase,
  ModalConfirm,
  ModalConfirmBase,
  ModalAlert,
  ModalAlertBase,
  ModalTextField,
  ModalTextFieldBase,
  Popup,
  List,
  ListItem,
  ListItemOrdered,
  Progress,
  Search,
  Link,

  HOC: {
    Alert,
    AlertProvider,
  },
},
  utils,
  typography,
  vars,
)
