import Banner from './src/components/Banner/Banner'
import Button from './src/components/Button/Button'
import ButtonSmall from './src/components/Button/ButtonSmall'
import ButtonBig from './src/components/Button/ButtonBig'
import Table from './src/components/Table/Table'
import TableRow from './src/components/TableRow/TableRow'
import TableRowBase from './src/components/TableRow/TableRowBase'
import TableRowBagItem from './src/components/TableRow/TableRowBagItem'
import TableRowOrderItem from './src/components/TableRow/TableRowOrderItem'
import TableRowArrow from './src/components/TableRow/TableRowArrow'
import TableRowStore from './src/components/TableRow/TableRowStore'
import TableRowOperation from './src/components/TableRow/TableRowOperation'
import TableRowGroup from './src/components/TableRow/TableRowGroup'
import TableRowCheckbox from './src/components/TableRow/TableRowCheckbox'
import TableRowRadio from './src/components/TableRow/TableRowRadio'
import TableRowPath from './src/components/TableRow/TableRowPath'
import TextField from './src/components/TextField/TextField'
import TextFieldAddress from './src/components/TextFieldAddress/TextFieldAddress'
import CreditCardField from './src/components/CreditCardField/CreditCardField'
import TextVibrate from './src/components/Text/TextVibrate'
import TextSecondary from './src/components/Text/TextSecondary'
import TextBase from './src/components/Text/TextBase'
import TextBaseCenter from './src/components/Text/TextBaseCenter'
import RemoteImage from './src/components/RemoteImage/RemoteImage'
import StoreLogo from './src/components/StoreLogo/StoreLogo'
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
import Tabs from './src/components/Tabs/Tabs'
import ItemCard from './src/components/ItemCard/ItemCard'
import ItemPhoto from './src/components/ItemPhoto/ItemPhoto'
import PromoCard from './src/components/PromoCard/PromoCard'
import Gallery from './src/components/Gallery/Gallery'
import ComboBox from './src/components/ComboBox/ComboBox'
import EmptyView from './src/components/EmptyView/EmptyView'
import Bag from './src/components/Bag/Bag'
import Message from './src/components/Message/Message'
import ScrollView from './src/components/ScrollView/ScrollView'
import Checkbox from './src/components/Checkbox/Checkbox'
import Markdown from './src/components/Markdown/Markdown'
import CardImageLeft from './src/components/CardImageLeft/CardImageLeft'

import Alert from './src/hoc/Alert/Alert'
import { AlertProvider } from './src/hoc/Alert/AlertProvider'

import * as utils from './src/common/utils'
import * as typography from './src/common/typography'
import * as vars from './src/common/vars'
import extend from 'lodash/extend'

module.exports = extend({
  Banner,
  Button,
  ButtonBig,
  ButtonSmall,
  BottomButtonView,
  CreditCardField,
  Table,
  TableRow,
  TableRowBase,
  TableRowBagItem,
  TableRowOrderItem,
  TableRowArrow,
  TableRowStore,
  TableRowOperation,
  TableRowGroup,
  TableRowCheckbox,
  TableRowRadio,
  TableRowPath,
  TopImageView,
  TextField,
  TextFieldAddress,
  TextVibrate,
  TextSecondary,
  TextBase,
  TextBaseCenter,
  RemoteImage,
  StoreLogo,
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
  Tabs,
  ItemCard,
  ItemPhoto,
  PromoCard,
  Gallery,
  ComboBox,
  EmptyView,
  Bag,
  Message,
  ScrollView,
  Checkbox,
  Markdown,
  CardImageLeft,

  HOC: {
    Alert,
    AlertProvider,
  },
},
  utils,
  typography,
  vars,
)
