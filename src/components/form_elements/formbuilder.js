import Vue from 'vue';

import draggable from 'vuedraggable'

import TextInput from '@/components/form_elements/FormElementTextInput'
import LongTextInput from '@/components/form_elements/FormElementLongTextInput'
import NumberInput from '@/components/form_elements/FormElementNumberInput'
import SelectList from '@/components/form_elements/FormElementSelectList'
import RadioButton from '@/components/form_elements/FormElementRadioButton'
import Checkbox from '@/components/form_elements/FormElementCheckbox'
import TimePicker from '@/components/form_elements/FormElementTimePicker'
import DatePicker from '@/components/form_elements/FormElementDatePicker'
import DatetimePicker from '@/components/form_elements/FormElementDatetimePicker'
import Rating from '@/components/form_elements/FormElementRating'
import Button from '@/components/form_elements/FormElementButton'
import TextEditor from '@/components/form_elements/FormElementTextEditor'
import Heading from '@/components/form_elements/FormElementHeading'
import Subheading from '@/components/form_elements/FormElementHeading'

import Elements from '@/components/form_elements/Elements'
import Properties from '@/components/form_elements/Properties'
import Theming from '@/components/form_elements/Theming'


export const FormBuilder = new Vue({
  components: {
    Elements,
    Properties,
    Theming,
    draggable,
    TextInput,
    LongTextInput,
    NumberInput,
    SelectList,
    RadioButton,
    Checkbox,
    TimePicker,
    DatePicker,
    DatetimePicker,
    Rating,
    Button,
    TextEditor,
    Heading,
    Subheading
  },
  data() {
    return {
      fields: [
        {
          'name': 'Heading',
          'text': 'Heading',
          'group': 'form', //form group
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': true,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'Subheading',
          'text': 'Subheading',
          'group': 'form', //form group
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': true,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'TextInput',
          'text': 'Text',
          'group': 'form', //form group
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': true,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'LongTextInput',
          'text': 'Long Text',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': true,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'NumberInput',
          'text': 'Number',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'SelectList',
          'text': 'Select',
          'group': 'form',
          'hasOptions': true,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'RadioButton',
          'text': 'Radio',
          'group': 'form',
          'hasOptions': true,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'Checkbox',
          'text': 'Checkbox',
          'group': 'form',
          'hasOptions': true,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'TimePicker',
          'text': 'Time Picker',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'DatePicker',
          'text': 'Date Picker',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'DatetimePicker',
          'text': 'Date-Time Picker',
          'group': 'form',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        },
        {
          'name': 'TextEditor',
          'text': 'Text editor',
          'group': 'static',
          'hasOptions': false,
          'isRequired': false,
          'isHelpBlockVisible': false,
          'isPlaceholderVisible': false,
          'isDependsOnDefined': false,
          'isUnique': false,
          'edit_requires_check': false,
          'icon': null,
          'allow_other': false,
          'depends_on': null
        }
      ],

      sortElementOptions: {
        group: {name: 'formbuilder', pull: false, put: true},
        sort: true,
        handle: ".form__actionitem--move"
      },

      dropElementOptions: {
        group: {name: 'formbuilder', pull: 'clone', put: false},
        sort: false,
        ghostClass: "sortable__ghost",
        filter: ".is-disabled"
      }
    }
  },
  methods: {
    deleteElement(index) {
      vm.$store.activeForm = [];
      vm.$store.activeTabForFields = "elements";
      this.$delete(vm.$store.forms, index);
    },

    cloneElement(index, form) {
      var cloned = _.cloneDeep(form) // clone deep lodash
      vm.$store.forms.splice(index, 0, cloned)
    },

    editElementProperties(form) {
      vm.$store.activeForm = form;
      vm.$store.activeTabForFields = "properties";
    }
  }
});
