import { Component } from '@angular/core';

@Component({
  selector: 'exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {
  strength = [
    {
      img: 'https://cdn.shopify.com/s/files/1/0420/9999/8873/files/chest_press_480x480.jpg?v=1635266203',
      head: 'Chest Press',
      parg: 'Pushing movements, like a pushup or chest press, strengthen the upper body through vertical or horizontal movement against resistance.',
      btn: 'Exercise',
      href: 'https://youtu.be/sqNwDkUU_Ps?si=VcBUEc2UJk3qVL0p',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0420/9999/8873/files/squats_480x480.jpg?v=1635266015',
      head: 'Squats',
      parg: 'Exercises with movements like squats utilize the hips moving in flexion and extension, and are referred to as hip-dominant.Incorporate exercises that target the back, thighs, hamstring, and glutes to strengthen these muscles.',
      btn: 'Exercise',
      href: 'https://youtu.be/m0GcZ24pK6k?si=k8iEv4ROECqTiQRu',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0420/9999/8873/files/bent_over_row_480x480.jpg?v=1635266292',
      head: 'Bent Over Row',
      parg: 'The bent-over row is a key strength training exercise that develops your upper back and biceps. This exercise is great for any level of strength because it can be done with as little as a 5-lb dumbbell.',
      btn: 'Exercise',
      href: 'https://youtu.be/6gvmcqr226U?si=_4c2H7UH3mLAe221',
    },
  ]


    cardo =[
    {
      img: 'https://www.cnet.com/a/img/resize/86c8528033954fdf5e648824ee4dd3f799c680f9/hub/2020/11/29/e2248a0a-32ae-4491-8a86-f5301c45adf8/gettyimages-664660935.jpg?auto=webp&width=1200',
      head: 'Jump rope',
      parg: 'Jumping rope is an easy plyometric workout that benefits several muscles at the same time. Even with such a simple movement ,you are getting your heart rate up and improving your strength and endurance',
      btn:  'Exercise', 
      href: 'https://youtu.be/O0sgZQ-mESs?si=f5NYaRUpx0cK81Dv',
    },
    {
      img: 'https://www.cnet.com/a/img/resize/71a6130770ede4197c9611b639ff453293dc2d0a/hub/2023/01/30/113430d9-4a53-4c13-8bcd-3d9ab29a3617/gettyimages-1277172169.jpg?auto=webp&width=1200',
      head: 'Burpees',
      parg: 'Burpees are a piece of your HIIT workout that raise your heart rate and strengthen your muscles. Not only can they can improve your lung capacity and cardiovascular function, they can help you burn calories and fat.',        
      btn: 'Exercise',
      href: 'https://youtu.be/818SkLAPyKY?si=ZYJd6X7q-_H2pIsN',
    },
    {
      img: 'https://www.cnet.com/a/img/resize/a5f6f76477388a9c2a2ae0ec955c85a7cf8b05c7/hub/2023/01/30/592e6e28-65a4-4839-a887-680a52964d00/gettyimages-1385738360.jpg?auto=webp&width=1200',
      head: 'Cycling',
      parg: "Cycling is a low-impact aerobic exercise, meaning it is great for people who don't want to put too much pressure on their ankles and knees. It gets your heart rate up and helps you build muscle and endurance.",        
      btn: 'Exercise',
      href: 'https://youtu.be/0MLnC3bzXgQ?si=9s3NDcfWQ1oMBySK',
    },
  ]


  Flexibility =[
    {
      img: 'https://media.self.com/photos/65381bb40030543563c38ba1/master/w_1920%2Cc_limit/Jo-forward-fold.jpg',
      head: 'Forward Fold',
      parg: "'Stand with your feet hip-width apart, knees slightly bent, and arms by your sides.Exhale as you fold forward from the hips and bring your head towards the floor. Tuck your chin under, relax your shoulders, and think about extending the crown of your head toward the floor to create a long spine.",
      btn:  'Exercise', 
      href: 'https://youtu.be/goN4rWbQUn4?si=4ugsfySqlWWhJ5Yu',
    },
    {
      img: 'https://media.self.com/photos/5a305b5a83ab3f54feacf748/master/w_1920%2Cc_limit/2_13self.jpg',
      head: 'Piriformis Stretch',
      parg: "'Sit on the floor with both legs extended in front of you.Cross your right leg over your left and place your right foot flat on the floor.Place your right hand on the floor behind your body.",
      btn:  'Exercise',
      href: 'https://youtu.be/iL19XaxMmP4?si=lpbeCGcHq5SPcKYJ',
    },
    {
      img: 'https://media.self.com/photos/63b8a2f9520f9be4e31eae04/master/w_1920%2Cc_limit/Gail-hip-adductor-stretch.jpg',
      head: 'Hip Adductors Stretch',
      parg: 'Stand tall with feet slightly wider than shoulder-width apart.Shift your weight to the right, bending the right knee slightly. Hike up your right hip slightly while keeping the left hip pulled down. You should feel a stretch on the inside of your left leg.Hold for at least 30 seconds, then switch sides and repeat.',
      btn:  'Exercise',
      href: 'https://youtu.be/NqxJdfQDt3c?si=2ac0fammd4G1fsWp',
    },
  ]




}
