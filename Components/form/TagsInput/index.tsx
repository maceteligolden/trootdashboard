import { Tag } from 'lib/models';
import styles from "./index.module.css";
import { useState } from 'react';
import CloseIcon from 'Components/icon/close';

interface ITagsInput {
    tags: Tag[],
    setTags: (tags: Tag[]) => void
}

const KeyCodes = {
    comma: 188,
    enter: 13
}

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default function TagsInput(args: ITagsInput) {

    const { tags, setTags } = args;

    const [value, setValue] = useState<string>();

    const handleDelete = (i) => {
        setTags(tags.filter((_, index) => index !== i));
    }

    const handleAddition = (tag) => {
        setTags([...tags, { name:tag}]);
    }

    const Tag = (data: {tag:Tag, index: number}) => {
        return (
            <>
                <div className={styles.tagcontainer}>
                    {data.tag.name} <CloseIcon onClick={() => handleDelete(data.index)}/>
                </div>
            </>
        )
    }

    return (
        <>
            <div className={styles.tagscontainer}>
                <div className={styles.tags}>
                    {tags.map((tag: Tag, index)=> {
                        return (
                            <>
                                <Tag tag={tag} index={index}/>
                            </>
                        )
                    })}
                </div>
                <input 
                    type="text" 
                    className={styles.input} 
                    value={value} 
                    onChange={(e: any)=> {
                        setValue(e.target.value)
                    }} 
                    onKeyDown={(e: any) => {
                        if(e.key === "Enter") {
                            handleAddition(e.target.value);
                            setValue("");
                        }
                    }}
                />
            </div>
        </>
    )
}



