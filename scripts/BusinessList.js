import {useBusinesses} from "./BusinessProvider.js"
import {Business} from "./Business.js"

const contentTarget = document.querySelector(".business")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = ""

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}