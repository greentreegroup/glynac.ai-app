-- CreateTable
CREATE TABLE "LoginPage" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoginPage_pkey" PRIMARY KEY ("id")
);

-- Insert sample data
INSERT INTO "LoginPage" (email, password, name, role, is_active, date_created) VALUES
('user1@example.com', 'password1', 'User One', 'Admin', TRUE, CURRENT_TIMESTAMP),
('user2@example.com', 'password2', 'User Two', 'User', TRUE, CURRENT_TIMESTAMP),
('user3@example.com', 'password3', 'User Three', 'User', FALSE, CURRENT_TIMESTAMP),
('user4@example.com', 'password4', 'User Four', 'User', TRUE, CURRENT_TIMESTAMP),
('user5@example.com', 'password5', 'User Five', 'User', TRUE, CURRENT_TIMESTAMP);   
