import moment from "moment";
import {} from "lodash";

import { validators } from "../src";

module.exports = {
	currentPage: 0,
	pages: [
		{
			fields: [

				/***********/
				/*  INPUT  */
				/***********/
				{
				    type: "input",
				    inputType: "hidden",
				    label: "--- INPUT ---",
				    model: "",
				    styleClasses: "alert alert-info"
				},
				{
				    type: "input",
				    inputType: "hidden",
				    label: "Hidden",
				    model: "id",
				    inputName: "hiddenField"
				},
				{
				    type: "input",
				    inputType: "text",
					label: "First name",
					model: "firstName",
					featured: true,
					required: true,
					placeholder: "User's first name",
					styleClasses: "half-width",
					validator: validators.string,
					onChanged(model, newVal, oldVal, field) {
						console.log(`Model's name changed from ${oldVal} to ${newVal}. Model:`, model);
					},
					onValidated(model, errors, field) {
						if (errors.length > 0)
							console.warn("Validation error in Name field! Errors:", errors);
					}
				},
				{
				    type: "input",
				    inputType: "text",
					label: "Last name",
					model: "lastName",
					featured: true,
					required: true,
					placeholder: "User's last name",
					styleClasses: "half-width",
					validator: validators.string
				},
			]
		}
	],
}
