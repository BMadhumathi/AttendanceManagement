import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;

public class Comment {
    private int commentId;
    private int postId; // Foreign key to link the comment to its associated post
    private int userId; // Foreign key to link the comment to its creator
    private String commentContent;
    private String commentDate;

    // Constructors
    public Comment() {
    }

    public Comment(int commentId, int postId, int userId, String commentContent, String commentDate) {
        this.commentId = commentId;
        this.postId = postId;
        this.userId = userId;
        this.commentContent = commentContent;
        this.commentDate = commentDate;
    }

    // Getters and setters
    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public String getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(String commentDate) {
        this.commentDate = commentDate;
    }

    // Create a new comment
    public static void createComment(Connection connection, Comment comment) throws SQLException {
        String sql = "INSERT INTO comments (post_id, user_id, comment_content, comment_date) VALUES (?, ?, ?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, comment.getPostId());
            stmt.setInt(2, comment.getUserId());
            stmt.setString(3, comment.getCommentContent());
            stmt.setString(4, comment.getCommentDate());
            stmt.executeUpdate();
        }
    }

    // Retrieve a comment by ID
    public static Comment getCommentById(Connection connection, int commentId) throws SQLException {
        Comment comment = null;
        String sql = "SELECT * FROM comments WHERE comment_id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, commentId);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    // Populate the Comment object with data from the ResultSet
                    comment = new Comment();
                    comment.setCommentId(rs.getInt("comment_id"));
                    comment.setPostId(rs.getInt("post_id"));
                    comment.setUserId(rs.getInt("user_id"));
                    comment.setCommentContent(rs.getString("comment_content"));
                    comment.setCommentDate(rs.getString("comment_date"));
                }
            }
        }
        return comment;
    }

    // Update comment information
    public void updateComment(Connection connection) throws SQLException {
        String sql = "UPDATE comments SET comment_content = ?, comment_date = ? WHERE comment_id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, this.getCommentContent());
            stmt.setString(2, this.getCommentDate());
            stmt.setInt(3, this.getCommentId());
            stmt.executeUpdate();
        }
    }

    // Delete a comment by ID
    public static void deleteComment(Connection connection, int commentId) throws SQLException {
        String sql = "DELETE FROM comments WHERE comment_id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, commentId);
            stmt.executeUpdate();
        }
    }
}
