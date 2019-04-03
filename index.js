import Banner from './src/components/Banner/Banner'
import Button from './src/components/Button/Button'
import Table from './src/components/Table/Table'
import TableRow from './src/components/TableRow/TableRow'
import TableRowBase from './src/components/TableRow/TableRowBase'
import TableRowOrder from './src/components/TableRow/TableRowOrder'
import TableRowOrderImages from './src/components/TableRow/TableRowOrderImages'
import TableRowOrderItem from './src/components/TableRow/TableRowOrderItem'
import TableRowOrderItemCheckbox from './src/components/TableRow/TableRowOrderItemCheckbox'
import TableRowArrow from './src/components/TableRow/TableRowArrow'
import TableRowStore from './src/components/TableRow/TableRowStore'
import TableRowProfile from './src/components/TableRow/TableRowProfile'
import RemoteImage from './src/components/RemoteImage/RemoteImage'
import StoreLogo from './src/components/StoreLogo/StoreLogo'
import SegmentedTab from './src/components/SegmentedTab/SegmentedTab'
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

import * as utils from './src/common/utils'
import * as typography from './src/common/typography'
import * as vars from './src/common/vars'
import extend from 'lodash/extend'

module.exports = extend({
  Banner,
  Button,
  BottomButtonView,
  Table,
  TableRow,
  TableRowBase,
  TableRowOrder,
  TableRowOrderImages,
  TableRowOrderItem,
  TableRowOrderItemCheckbox,
  TableRowArrow,
  TableRowStore,
  TableRowProfile,
  TopImageView,
  RemoteImage,
  StoreLogo,
  SegmentedTab,
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
},
  utils,
  typography,
  vars,
)
