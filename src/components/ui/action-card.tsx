import React from 'react';
import { cn, theme, presets } from '@/lib/styles';

export interface ActionCardProps {
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Button text */
  buttonText?: string;
  /** Visual variant */
  variant?: 'primary' | 'secondary';
  /** Button click handler */
  onAction?: () => void;
  /** Custom content instead of default button */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ActionCard - CTA card with title, description, and action button
 * 
 * @example
 * ```tsx
 * <ActionCard
 *   title="Get Started"
 *   description="Create your first project"
 *   buttonText="Start Now"
 *   variant="primary"
 *   onAction={() => console.log('clicked')}
 * />
 * ```
 */
export function ActionCard({
  title,
  description,
  buttonText,
  variant = 'primary',
  onAction,
  children,
  className,
}: ActionCardProps) {
  const isPrimary = variant === 'primary';

  return (
    <div
      className={cn(
        'p-6',
        isPrimary ? presets.card.dark : presets.card.muted,
        className
      )}
    >
      <h3
        className={cn(
          theme.font.semibold,
          'mb-2',
          isPrimary ? theme.colors.text.inverse : theme.colors.text.primary
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={cn(
            theme.text.sm,
            'mb-4',
            isPrimary ? theme.colors.text.light : theme.colors.text.muted
          )}
        >
          {description}
        </p>
      )}
      {children ||
        (buttonText && (
          <button
            onClick={onAction}
            className={isPrimary ? presets.button.secondary : presets.button.primary}
          >
            {buttonText}
          </button>
        ))}
    </div>
  );
}
