import moment from "moment";
import {} from "lodash";

import { validators } from "../src";

module.exports = {
	currentPage: 0,
	pages: [
		{
			fields: [
				{
				    type: "input",
				    inputType: "hidden",
				    label: "Hidden",
				    model: "id",
				    inputName: "hiddenField"
				},
				{
				    type: "text",
					label: "First name",
					model: "firstName",
					required: true,
					placeholder: "User's first name",
					styleClasses: "half-width",
					validator: validators.string
				},
				{
				    type: "text",
					label: "Last name",
					model: "lastName",
					required: true,
					styleClasses: "half-width",
					placeholder: "User's last name",
					validator: validators.string
				},
			]
		},
		{
			fields: [
				{
				    type: "text",
					label: "Street",
					model: "street",
					required: true,
					placeholder: "User's first name",
					styleClasses: "half-width",
					validator: validators.string
				},
				{
				    type: "text",
					label: "Foo",
					model: "foo",
					required: true,
					styleClasses: "half-width",
					placeholder: "User's last name",
					validator: validators.string
				},
			]
		}
	],
}
