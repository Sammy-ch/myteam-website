import cn from "classnames"
import {useFormContext} from "react-hook-form";
import {AnimatePresence,motion} from "framer-motion";
import {isFormInvalid} from "@/components/utils/isFormInvalid";
import {findInputError} from "@/components/utils/findInputError";

export const Input = ({name,label,id,type,placeholder,validation,multiline,classname}) => {
    const { register,formState: { errors}, } = useFormContext();
    const inputError = findInputError(errors,label)
    const IsInvalid = isFormInvalid(inputError)

    return (
        <div className={"flex flex-col text-white gap-[8px]"}>
            {multiline ? (
                <textarea
                    id={id}
                    type={type}
                    className={"min-h-[82px] xs:w-[327px] resize-y input"}
                    placeholder={placeholder}
                    {...register(`${name}`,validation)}>
                </textarea>
            ) :
                <input
                    id={id}
                    type={type}
                    className={"w-[540px] xs:w-[327px] h-[42px] input"}
                    placeholder={placeholder}
                    {...register(label, validation)}
                />

            }

            <AnimatePresence mode={"wait"} initial={false}>
                {IsInvalid && (
                    <InputError
                    message={inputError.error.message}
                    key={inputError.error.message}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}
const InputError = ({message}) => {
    return (
        <motion.em className={"text-[#F67E7E] text-[10px]"} {...framer_error}>
            {message}
        </motion.em>
    )
}
const framer_error = {
    initial:{opacity:0, y: 10},
    animate:{opacity: 1, y:0},
    exit: {opacity:0,y:10},
    transition:{duration:0.2},
}


export default Input;