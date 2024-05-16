import { useEffect, useRef, useState } from 'react';
import Button from '../Util/Button';
import cssClasses from './ResultCard.module.css';

export default function ResultCard({saltObj}){
    const [currentFSPNames, setCurrentFSPNames] = useState({
        form : saltObj.most_common.Form,
        strength : saltObj.most_common.Strength,
        packing : saltObj.most_common.Packing
    });

    const [sellingPricesAry, setSellingPricesAry] = useState([]);

    const [currentSaltForm, setCurrentSaltForm] = useState(saltObj.salt_forms_json[currentFSPNames.form]);
    const [currentFormStrength, setCurrentFormStrength] = useState(saltObj.salt_forms_json[currentFSPNames.form][currentFSPNames.strength]);
    const [currentStrengthPkging, setCurrentStrengthPkging] = useState(saltObj.salt_forms_json[currentFSPNames.form][currentFSPNames.strength][currentFSPNames.packing]);

    const [isShowMoreForms, setIsShowMoreForm] = useState(false);
    const [isShowMoreStrengths, setIsShowMoreStrengths] = useState(false);
    const [isShowMorePackings, setIsShowMorePackings] = useState(false);

    useEffect(()=>{
        setSellingPricesAry([]);
        Object.entries(currentStrengthPkging).map(([productId, pharmacyDetails])=>{
            (pharmacyDetails !== null) &&
                pharmacyDetails.map((pharmacy)=>{
                    setSellingPricesAry((preVal)=>{
                        const newVal = [pharmacy.selling_price, ...preVal];
                        return newVal;
                    });
                })
        })
    },[currentStrengthPkging])

    function onFormButtonClick(newFormName){
        const newStrengthName = Object.keys(saltObj.salt_forms_json[newFormName])[0];
        const newPackingName = Object.keys(saltObj.salt_forms_json[newFormName][newStrengthName])[0];  
        setCurrentFSPNames((preVal)=>{
            return { 
                ...preVal, 
                form : newFormName,
                strength : newStrengthName,
                packing : newPackingName
            }
        })

        setCurrentSaltForm(saltObj.salt_forms_json[newFormName]);
        setCurrentFormStrength(saltObj.salt_forms_json[newFormName][newStrengthName]);
        setCurrentStrengthPkging(saltObj.salt_forms_json[newFormName][newStrengthName][newPackingName]);
    }

    function onStrengthButtonClick(newStrengthName){
        const newPackingName = Object.keys(saltObj.salt_forms_json[currentFSPNames.form][newStrengthName])[0];  
        setCurrentFSPNames((preVal)=>{
            return { 
                ...preVal, 
                // form : newFormName,
                strength : newStrengthName,
                packing : newPackingName
            }
        })

        setCurrentFormStrength(saltObj.salt_forms_json[currentFSPNames.form][newStrengthName]);
        setCurrentStrengthPkging(saltObj.salt_forms_json[currentFSPNames.form][newStrengthName][newPackingName]);
    }

    function onPackingButtonClick(newPackingName){s
        // const newPackingName = Object.keys(saltObj.salt_forms_json[currentFSPNames.form][newStrengthName])[0];  
        setCurrentFSPNames((preVal)=>{
            return { 
                ...preVal, 
                // form : newFormName,
                // strength : newStrengthName,
                packing : newPackingName
            }
        })

        // setCurrentFormStrength(saltObj.salt_forms_json[currentFSPNames.form][newStrengthName]);
        setCurrentStrengthPkging(saltObj.salt_forms_json[currentFSPNames.form][currentFSPNames.strength][newPackingName]);
    }

    return(
        <div className={cssClasses.result_card}>
            <div className={cssClasses.left_block}>
                <div className={cssClasses.row} style={!isShowMoreForms ? {maxHeight:'5.1rem'} : {}}>
                    <span 
                        className={cssClasses.left_block_heading} 
                        style={{marginRight:'3.2rem'}}
                        onClick={()=>setIsShowMoreForm(!isShowMoreForms)}
                    >
                        Form:
                    </span>
                    <div>
                        {saltObj.available_forms.map((form)=>(
                            <Button 
                                key={form}
                                butText={form}
                                isActive={currentFSPNames.form === form ? true : false}
                                handleClick={onFormButtonClick}
                            />
                        ))}
                    </div>
                </div>
                <div className={cssClasses.row} style={!isShowMoreStrengths ? {maxHeight:'5.1rem'} : {}}>
                    <span 
                        className={cssClasses.left_block_heading} 
                        style={{marginRight:'1.5rem'}}
                        onClick={()=>setIsShowMoreStrengths(!isShowMoreStrengths)}
                    >
                        Strength:
                    </span>
                    <div>
                        {Object.keys(currentSaltForm).map((strength)=>(
                            <Button 
                                key={strength}
                                butText={strength}
                                isActive={currentFSPNames.strength === strength ? true : false}
                                handleClick={onStrengthButtonClick}
                            />
                        ))}
                    </div>
                </div>
                <div className={cssClasses.row} style={!isShowMorePackings ? {maxHeight:'5.1rem'} : {}}>
                    <span 
                        className={cssClasses.left_block_heading} 
                        style={{marginRight:'0.5rem'}}
                        onClick={()=>setIsShowMorePackings(!isShowMorePackings)}
                    >
                        Packaging:
                    </span>
                    <div>
                    {Object.keys(currentFormStrength).map((packing)=>(
                        <Button 
                            key={packing} 
                            butText={packing}
                            isActive={currentFSPNames.packing === packing ? true : false}
                            handleClick={onPackingButtonClick}
                        />
                    ))}
                    </div>
                </div>
            </div>

            <div className={cssClasses.center_block}>
                <span className={cssClasses.salt_name_heading}>{saltObj.salt}</span>
                <span className={cssClasses.current_combination}>{currentFSPNames.form} | {currentFSPNames.strength} | {currentFSPNames.packing}</span>
            </div>
            <div className={cssClasses.right_block}>
                {
                    (sellingPricesAry.length !== 0)
                    ?
                        // <span className={cssClasses.rate}>From&#8377;70</span>
                        <span className={cssClasses.rate}>From&#8377;{Math.min(...sellingPricesAry)}</span>
                    :
                        <div className={cssClasses.no_store_selling_box}>
                            <span>No stores selling this product near you</span>
                        </div>
                }
            </div>
        </div>
    )
}