"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  title: string;
  description: string;
  dates: string;
  summary: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  image: string;
}

export function VolunteerCard({
  title,
  description,
  dates,
  summary,
  links,
  image
}: Props) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Link href="#" className="block cursor-pointer" onClick={handleClick}>
      <li className="relative ml-16 py-4">
        {/* Remove the previous stem div completely */}
        
        <div className="absolute -left-16 top-2 flex items-center justify-center bg-background rounded-full">
          <Avatar className="border size-12 relative">
            <AvatarImage
              src={image}
              alt={title}
              className="object-contain scale-90"
            />
            <AvatarFallback>{title.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        
        <Card className="flex flex-col"> {/* Simplified card structure */}
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {dates}
              </div>
            </div>
            <div className="font-sans text-xs mt-2">
              <Markdown className="[&>p]:m-0">{summary}</Markdown>
            </div>
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xs sm:text-sm"
            >
              <Markdown className="[&>p]:m-0">{description}</Markdown>
              <CardFooter>
                {links && links.length > 0 && (
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    {links?.map((link, idx) => (
                      <Link href={link.href} key={idx} target="_blank">
                        <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </CardFooter>

            </motion.div>
          )}
        </Card>
      </li>
    </Link>
  );
}
