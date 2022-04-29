import React from 'react';
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";
import Avatar from "../components/Avatar";
import { ref, onValue } from 'firebase/database';
import { db } from "./api/methods/firebase_obj";
import { useState, useEffect } from "react";
import spinner from "./api/assets/spinner.gif";
import Image from "next/image";
import { useRouter } from 'next/router'

function About() {
  return (
    <div>
        About
    </div>
  )
}

export default About