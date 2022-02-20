import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'this is feedback item 2',
            rating: 9
        },
        {
            id: 2,
            text: 'this is feedback item 2',
            rating: 7
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete ?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext