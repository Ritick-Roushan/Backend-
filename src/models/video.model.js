import mongoose, {Schema}  from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFile: {
            type : String, // cloudinary url
            required: true
        },
        thumbnail : {
            type: String, // cloudinary r
            required : true
        },
        title : {
            type: String,
            required : true
        },
        description : {
            type: String,
            required : true
        },
        duration : {
            type: Number , // cloudnary url
            required : true
        },
        views : {
            type: Number,
            defalut: 0
        },
        isPublished: {
            type: Boolean,
            defalut: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const video = mongoose.model("Video",videoSchema)