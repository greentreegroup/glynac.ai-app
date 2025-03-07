// src/components/UserAvatar.tsx
import React from 'react';
import { z } from 'zod';

// Define a Zod schema for the user
const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatar: z.string().url().optional(), // Avatar is optional and should be a valid URL if provided
});

// Define a type for the user based on the schema
type User = z.infer<typeof userSchema>;

interface UserAvatarProps {
  user: User;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
  // Validate the user data against the schema
  const validationResult = userSchema.safeParse(user);

  if (!validationResult.success) {
    console.error("Invalid user data:", validationResult.error);
    return <div className="avatar-placeholder">User Data Invalid</div>; // Handle invalid user data
  }

  const { avatar, name } = validationResult.data;

  // Default avatar if no image is provided
  const defaultAvatar = "https://via.placeholder.com/150"; // Placeholder image URL

  return (
    <div className="user-avatar">
      <img
        src={avatar || defaultAvatar} // Use the avatar if available, otherwise use the default
        alt={name}
        className="rounded-full w-12 h-12" // Example styling
      />
      <span>{name}</span>
    </div>
  );
};

export default UserAvatar;