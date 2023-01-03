import "../styles/MultiSelectInput.css"
import {useRef, useState} from "react";
import {useClickOutside} from 'use-events';

export const MultiSelectInput = (props) => {
    let {items} = props
    const [focused, setFocused] = useState(false);
    const [selectedItem, setSelectedItems] = useState([]);

    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useClickOutside([ref1, ref2], event => {
        if (event) {
            setFocused(false);
        }
    });

    let selectLabel = selectedItem.length > 3 ? `${selectedItem[1]} and ${selectedItem.length - 1} more` : selectedItem.join(" | ");

    let _addOrRemove = (item, r = false) => {
        if (r) {
            setSelectedItems(selectedItem.filter((e, i) => e !== item));
        } else {
            setSelectedItems([...selectedItem, item])
        }
    }
    return <div>
        <div ref={ref1} className={"input-group" + (focused ? " focused" : "")}>
            <input id="id_sports" value={selectLabel} onClick={() => {
                setFocused(!focused);
            }} readOnly={true} placeholder="Favourite sports"/>
            <i className="ri-arrow-down-s-line"/>
        </div>

        <div ref={ref2} className={"collapsible-panel" + (focused ? " active" : "")}>
            <div className="p-10 grid-3-2-1">
                {items.map((item, index) => (
                    <div key={"item" + index} className="select-item flex flex-middle">
                        <input onChange={(e) => {
                            _addOrRemove(item, !e.target.checked);
                        }} className="mr-5" id={"item" + index} type="checkbox"/>
                        <label htmlFor={"item" + index}>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    </div>
}