const User = require('./model/user');
const City = require('./model/city');
const Country = require('./model/country');
const Lang = require('./model/lang');
const Company = require('./model/company');
const Category = require('./model/category');
const SubCategory = require('./model/subCategory');
const ComRevenue = require('./model/comRevenue');
const UserCompany = require('./model/userCompany');
const Post = require('./model/post');                 // Post Model User and Company
const Comment = require('./model/comment');           // Comment for Post Model
const Video = require('./model/video');               // Video Model for User and Company
const Image = require('./model/image');               // Image Model for User and Company
const ComSubCom = require('./model/comSubCom');       // Company Sub Companies Relation
const ComWorkCom = require('./model/comWorkCom');     // Company work with other companies --> like companies referance
const JobPosting = require('./model/jobPosting');     // Company have Job Postings
const CommentReply = require('./model/commentReply');
const Tag = require('./model/tag');
const PostTag = require('./model/postTag');
const Event = require('./model/event');
const EventTimeline = require('./model/eventTimeline');
const EventTicket = require('./model/eventTicket');
const FollowUser = require('./model/followUser');
const FollowCompany = require('./model/followCompany');


// City Country Relation
City.belongsTo(Country);
Country.hasMany(City);

// Company User Relation
Company.belongsTo(User);
User.hasMany(Company);

// User Workplace Relation
UserCompany.belongsTo(User);
User.hasMany(UserCompany);
UserCompany.belongsTo(Company);
Company.hasMany(UserCompany);

// Company has SubCompany
ComSubCom.belongsTo(Company);
Company.hasMany(ComSubCom);

// Company Work with Other Company --> Company Referance
ComWorkCom.belongsTo(Company);
Company.hasMany(ComWorkCom);

//Company JobPosting 
JobPosting.belongsTo(Company);
Company.hasMany(JobPosting);

// Language Relation --> NEED?
User.belongsTo(Lang);
Lang.hasMany(User); 

//Company Category SubCategory
SubCategory.belongsTo(Category);
Category.hasMany(SubCategory);
Company.belongsTo(Category);
Category.hasMany(Company);
Company.belongsTo(SubCategory);
SubCategory.hasMany(Company);

ComRevenue.belongsTo(Company);
Company.hasMany(ComRevenue);

//Post Schema
Post.belongsTo(Company);
Company.hasMany(Post);
Post.belongsTo(User);
User.hasMany(Post);

//Comment Schema
Comment.belongsTo(User)
User.hasMany(Comment);
Comment.belongsTo(Post);
Post.hasMany(Comment);

//Comment Reply Schema???
CommentReply.belongsTo(User);
User.hasMany(CommentReply);
CommentReply.belongsTo(Post);
Post.hasMany(CommentReply);
CommentReply.belongsTo(Comment);
Comment.hasMany(CommentReply);

//Post and Comment, Image and Video Schema
Image.belongsTo(Post);
Post.hasMany(Image),
Video.belongsTo(Post);
Post.hasMany(Video);
Image.belongsTo(Comment);
Comment.hasMany(Image);
Video.belongsTo(Comment);
Comment.hasMany(Video);

// Post Tag
PostTag.belongsTo(Post);
Post.hasMany(PostTag);

PostTag.belongsTo(Tag);
Tag.hasMany(PostTag);

// Fair Event
Event.belongsTo(User);
User.hasMany(Event);

EventTicket.belongsTo(Event);
Event.hasMany(EventTicket);

EventTimeline.belongsTo(Event);
Event.hasMany(EventTimeline);

EventTicket.belongsTo(User);
User.hasMany(EventTicket);

// User Follow User and Company

FollowCompany.belongsTo(User);
User.hasMany(FollowCompany);

FollowCompany.belongsTo(Company);
Company.hasMany(FollowCompany);



