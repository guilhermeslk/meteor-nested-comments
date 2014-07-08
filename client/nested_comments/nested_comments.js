/**
  Templates
**/

Template.newPost.events({
  "submit .newPost": function(evt, tmpl) {
      evt.preventDefault();
      
      var post = {
        title: tmpl.find(".postTitle").value,
        description: tmpl.find(".postBody").value,
        userId: Meteor.userId(),
        createdAt: new Date()
      }

      Posts.insert(post);

      tmpl.find(".postTitle").value = "";
      tmpl.find(".postBody").value = "";

  }
});

Template.postList.helpers({
  posts: function() {
    return Posts.find();
  }
});

Template.commentList.helpers({
  comments: function() {
    return Comments.find({postId: this._id});
  },
  commentsCounter: function() {
    return Comments.find({postId: this._id}).count();
  }
});

Template.commentItem.helpers({
 
  hasParent: function() {
    return Session.equals("parentId", this._id);
  },
  children: function() {
    return Comments.find({ parentId: this._id });
  }
});

Template.commentItem.events({
  "click .btnReplyComment": function(evt, tmpl) {
    Session.set("parentId", this._id);
  },
  "click .btnRemoveComment": function(evt, tmpl) {
    Meteor.call("removeCommentById", this._id);
  }
});

Template.newComment.events({
  "click .addComment": function(evt, tmpl) {
    var comment = {
      text: tmpl.find(".commentText").value,
      createdAt: new Date(),
      postId: this._id,
      userId: Meteor.userId()
    };

    if(Session.get("parentId")) {
      comment.parentId = Session.get("parentId");
    }

    Comments.insert(comment);

    tmpl.find(".commentText").value = "";

    Session.set("parentId", null);
    
  }
});


